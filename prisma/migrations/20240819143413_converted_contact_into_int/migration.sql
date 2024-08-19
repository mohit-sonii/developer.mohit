-- CreateTable
CREATE TABLE "contactform" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" INTEGER NOT NULL,
    "servicetype" TEXT NOT NULL,
    "submittedon" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contactform_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contactform_email_key" ON "contactform"("email");

-- CreateIndex
CREATE UNIQUE INDEX "contactform_contact_key" ON "contactform"("contact");
