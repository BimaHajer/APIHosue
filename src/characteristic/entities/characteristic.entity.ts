import { BeforeInsert,  BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("Characteristic")

export class Characteristic {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("text",{name:"Key",nullable:true})
    Key: string;
    @Column("text",{name:"title",nullable:true})
    title:string;
    @Column("text",{name:"description",nullable:true})
    description:string
    @Column("text",{name:"isvaible",nullable:true})
    isvaible:boolean
    @Column("text",{name:"isdelete",nullable:true})
    isdelete:boolean
    @Column("text",{name:"deleteAT",nullable:true})
    deleteAT: Date;
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