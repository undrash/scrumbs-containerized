

import { Entity, PrimaryColumn, Column, BaseEntity, BeforeInsert } from "typeorm";
import * as uuidv4 from "uuid/v4";






@Entity()
export class Subscriber extends BaseEntity {


    @PrimaryColumn("uuid") id: string;


    @Column( "varchar", { length: 255 } ) name: string;


    @Column( "varchar", { length: 255 } ) email: string;


    @BeforeInsert()
    addId() {
        this.id = uuidv4();
    }


}
