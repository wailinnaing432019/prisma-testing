const { PrismaClient } = require("@prisma/client");

const prisma=new PrismaClient();

prisma.user.upsert({
    where:{id:1},
    update:{name:"Bobby"},
    create:{name:"Bobby",bio:"Bobby's Bio"},
})
.then(result=>{
    console.log(result);
})
.catch(e=>{
    console.error(e);
    process.exit(1);
})
.finally(()=>{
    prisma.$disconnect();
});