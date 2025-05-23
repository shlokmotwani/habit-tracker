-- CreateTable
CREATE TABLE "User" (
    "userID" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "password" VARCHAR(400) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Habit" (
    "habitID" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "userID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("habitID")
);

-- CreateTable
CREATE TABLE "HabitLog" (
    "logID" SERIAL NOT NULL,
    "habitID" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "completed" BOOLEAN NOT NULL,

    CONSTRAINT "HabitLog_pkey" PRIMARY KEY ("logID")
);

-- CreateTable
CREATE TABLE "MoodLog" (
    "moodID" SERIAL NOT NULL,
    "userID" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "note" VARCHAR(500) NOT NULL,

    CONSTRAINT "MoodLog_pkey" PRIMARY KEY ("moodID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HabitLog" ADD CONSTRAINT "HabitLog_habitID_fkey" FOREIGN KEY ("habitID") REFERENCES "Habit"("habitID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MoodLog" ADD CONSTRAINT "MoodLog_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;
