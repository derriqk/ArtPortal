'use server';

import { Stuff, Condition, Purchase, Request } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Adds a new stuff to the database.
 * @param stuff, an object with the following properties: name, quantity, owner, condition.
 */
export async function addStuff(stuff: { name: string; quantity: number; owner: string; condition: string }) {
  // console.log(`addStuff data: ${JSON.stringify(stuff, null, 2)}`);
  let condition: Condition = 'good';
  if (stuff.condition === 'poor') {
    condition = 'poor';
  } else if (stuff.condition === 'excellent') {
    condition = 'excellent';
  } else {
    condition = 'fair';
  }
  await prisma.stuff.create({
    data: {
      name: stuff.name,
      quantity: stuff.quantity,
      owner: stuff.owner,
      condition,
    },
  });
  // After adding, redirect to the list page
  redirect('/list');
}

export async function requestArt(request: { owner: string; type: string; description: string; status: string }) {
  await prisma.request.create({
    data: {
      owner: request.owner,
      type: request.type,
      description: request.description,
      status: request.status,
    },
  });
  redirect('/options');
}

export async function purchaseArt(purchase: { title: string; owner: string; status: string }) {
  await prisma.purchase.create({
    data: {
      title: purchase.title,
      owner: purchase.owner,
      status: purchase.status,
    },
  });
  redirect('/options');
}

export async function deletePurchase(id: number) {
  await prisma.purchase.delete({
    where: { id },
  });
  redirect('/your-purchases');
}
export async function deleteRequest(id: number) {
  await prisma.request.delete({
    where: { id },
  });
  redirect('/your-purchases');
}

/**
 * Edits an existing stuff in the database.
 * @param stuff, an object with the following properties: id, name, quantity, owner, condition.
 */
export async function editStuff(stuff: Stuff) {
  // console.log(`editStuff data: ${JSON.stringify(stuff, null, 2)}`);
  await prisma.stuff.update({
    where: { id: stuff.id },
    data: {
      name: stuff.name,
      quantity: stuff.quantity,
      owner: stuff.owner,
      condition: stuff.condition,
    },
  });
  // After updating, redirect to the list page
  redirect('/list');
}

export async function editStatusPurchase(purchase: Purchase) {
  await prisma.purchase.update({
    where: { id: purchase.id },
    data: {
      status: purchase.status,
      title: purchase.title,
      owner: purchase.owner,
    },
  });
  redirect('/admin-view');
}
export async function editStatusRequest(request: Request) {
  await prisma.request.update({
    where: { id: request.id },
    data: {
      status: request.status,
      type: request.type,
      description: request.description,
      owner: request.owner,
    },
  });
  redirect('/admin-view');
}

/**
 * Deletes an existing stuff from the database.
 * @param id, the id of the stuff to delete.
 */
export async function deleteStuff(id: number) {
  // console.log(`deleteStuff id: ${id}`);
  await prisma.stuff.delete({
    where: { id },
  });
  // After deleting, redirect to the list page
  redirect('/list');
}

/**
 * Creates a new user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createUser(credentials: { email: string; password: string }) {
  // console.log(`createUser data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.create({
    data: {
      email: credentials.email,
      password,
    },
  });
}

/**
 * Changes the password of an existing user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  // console.log(`changePassword data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}
