const {PrismaClient} = require("@prisma/client");
const prisma=new PrismaClient();
prisma.user.create({
    data:{
        name:"Bob",
        bio:"profile bio",
        posts:{
            create:[
                {content:"First Post"},
                {content:"Secont Post"},

            ],
        },
    },
})
.then(()=>{
    console.log("Insert User Bob with posts");
})
.catch(e=>{
    console.error(e);
    process.exit(1);
})
.finally(()=>{
    prisma.$disconnect();
});