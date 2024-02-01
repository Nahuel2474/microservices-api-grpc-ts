/*
  Warnings:

  - The primary key for the `CartItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `author` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `genres` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `pages` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `publication_date` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `CartItem` table. All the data in the column will be lost.
  - The `id` column on the `CartItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `productId` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_pkey",
DROP COLUMN "author",
DROP COLUMN "desc",
DROP COLUMN "genres",
DROP COLUMN "image",
DROP COLUMN "pages",
DROP COLUMN "publication_date",
DROP COLUMN "rating",
DROP COLUMN "stock",
ADD COLUMN     "productId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id");
