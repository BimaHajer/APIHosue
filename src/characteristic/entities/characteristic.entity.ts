import { BeforeInsert, BeforeRemove, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("Characteristic")

export class Characteristic {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("text",{name:"house_id",nullable:true})
    house_id: string;
    @Column("text",{name:"Key",nullable:true})
    Key: string;
    @Column("text",{name:"value",nullable:true})
    value: string;
    @Column("date",{name:"createAt",nullable:true})
    created_at: Date;
    @Column("date",{name:"updateAt",nullable:true})
    updated_at: Date;
   
    @BeforeInsert()
    DateCreateAT(){
        this.created_at= new Date()// date de systeme
    }
    @BeforeUpdate()
    DateUpdateAT(){
        this.updated_at= new Date()
    }
    
}