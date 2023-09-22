enum Level{
    ADMIN = 0,
    MODERATOR =1,
    SUPPORT= 2,
    USER_READ_ONLY = 3
}

const user = {
    pseudo:'Batman',
    level: Level.SUPPORT
}

if( user.level === Level.SUPPORT)

console.log(`Bienvenue ${user.pseudo} Vous travailler au service support
  votre level est ${user.level}`)

  enum Color {
    Red = 1,
    Green,
    Blue = 6
  }

  let colorName:string = Color[6]
  let c = Color.Green;

  console.log(colorName)