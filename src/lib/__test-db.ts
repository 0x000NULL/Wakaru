import prisma from './db'

async function testConnection() {
  try {
    console.log('Testing database connection...')

    const userCount = await prisma.user.count()
    const vocabCount = await prisma.vocabulary.count()
    const kanaCount = await prisma.kana.count()

    console.log('✅ Database connection successful!')
    console.log(`Users: ${userCount}`)
    console.log(`Vocabulary: ${vocabCount}`)
    console.log(`Kana: ${kanaCount}`)
  } catch (error) {
    console.error('❌ Database connection failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
