
import { BeforeInsert,  BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("TypeHouse")

export class TypeHouse {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("text",{name:"title",nullable:true})
    title:string;
    @Column("text",{name:"description",nullable:true})
    description:string
    @Column("text",{name:"deleteAT",nullable:true})
    deleteAT: Date;
    @Column("text",{name:"createBy",nullable:true})
    createBy: string;
    @Column("text",{name:"updateBy",nullable:true})
    updateBy: string;
    @Column("date",{name:"createAt",nullable:true})
    created_at: Date;
    @Column("date",{name:"updateAt",nullable:true})
    updated_at: Date;
    @Column("date",{name:"isacti",nullable:true})
    isacti: Date;
   
    @BeforeInsert()
    DateCreateAT(){
        this.created_at= new Date()// date de systeme
    }
    @BeforeUpdate()
    DateUpdateAT(){
        this.updated_at= new Date()
    }
    
}