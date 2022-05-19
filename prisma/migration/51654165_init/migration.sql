-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "bothdey" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "possword" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "CFMenu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "orderName" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    CONSTRAINT "CFMenu_pkey" PRIMARY KEY ("id")
);