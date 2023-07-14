import { prisma } from './db'

const main = async () => {
  const post = await prisma.user.create({
    data: {
      Email: "test@test.test",
      FirstName: "Test",
      LastName: "Tester",
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
      MaxWpm: 200,
      CurrentWpm: 100,
      HighlghtColor: "GREY"
    }
  })
}

main()
  .catch(e => {
    console.log(e)
  })
