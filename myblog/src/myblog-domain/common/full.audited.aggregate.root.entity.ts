import { BaseEntity, CreateDateColumn, DeleteDateColumn, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";

export class FullAuditedAggregateRoot extends BaseEntity {

    @ObjectIdColumn()
    Id: ObjectID;

    @CreateDateColumn()
    InsertDate?: Date;

    @UpdateDateColumn()
    UpdateDate?: Date;

    @DeleteDateColumn()
    IsDeleted?: boolean;
}