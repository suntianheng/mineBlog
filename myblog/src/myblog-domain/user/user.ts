import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";
import { FullAuditedAggregateRoot } from "../common/full.audited.aggregate.root.entity";
import { Role } from "./role";

@Entity()
export class User extends FullAuditedAggregateRoot {

    @Column()
    UserName: string;

    @Column()
    Password: string;

    @Column((type) => Role)
    Roles?: Role[]
}