import { BaseEntity, CreateDateColumn, DeleteDateColumn, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";

export class FullAuditedEntity extends BaseEntity {

    @ObjectIdColumn()
    Id: ObjectID;

    @CreateDateColumn()
    InsertDate: Date;

    @UpdateDateColumn()
    UpdateDate: Date;

    @DeleteDateColumn()
    IsDeleted: boolean;

}