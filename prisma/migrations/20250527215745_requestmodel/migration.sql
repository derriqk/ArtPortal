-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'unspecified',
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);
