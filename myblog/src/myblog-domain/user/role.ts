import { Entity, Column } from "typeorm";
import { FullAuditedEntity } from "../common/full.audited.entity copy";


@Entity()
export class Role extends FullAuditedEntity {
 
    @Column()
    RoleName: string;

    @Column()
    RoleType: string;
}