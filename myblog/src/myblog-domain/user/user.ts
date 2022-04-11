import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

@Entity()
export class User {
    @ObjectIdColumn()
    Id: ObjectID;

    @Column()
    UserName: string;

    @Column()
    Password: string;
}