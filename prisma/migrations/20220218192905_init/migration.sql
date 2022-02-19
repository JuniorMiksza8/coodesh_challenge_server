-- CreateTable
CREATE TABLE "Cases" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "variant" TEXT NOT NULL,
    "num_sequences" DOUBLE PRECISION NOT NULL,
    "perc_sequences" DOUBLE PRECISION NOT NULL,
    "num_sequences_total" DOUBLE PRECISION NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cases_id_key" ON "Cases"("id");
