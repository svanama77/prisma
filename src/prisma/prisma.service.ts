import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
        process.on('SIGINT', async () => {
            await this.$disconnect();
            await app.close();
            process.exit(0);
        });

        process.on('SIGTERM', async () => {
            await this.$disconnect();
            await app.close();
            process.exit(0);
        });
    }
}



// import { INestApplication,Injectable, OnModuleInit } from '@nestjs/common';
// import { PrismaClient } from '@prisma/client';

// @Injectable()
// export class PrismaService extends PrismaClient implements OnModuleInit{
//     async  onModuleInit() {
//         await this.$connect();
        
//     }

//     async enableShutdownHooks(app:INestApplication) {
//       this.$on('beforeExit' , async() =>{

//         await app.close();
//       });

//     }
// }
