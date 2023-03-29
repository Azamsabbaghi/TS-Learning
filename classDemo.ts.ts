class Employee
{
    eid:number;
    ename:string;
    deptno:number;

    constructor (eid:number,ename:string,deptno:number)
    {
        this.eid=eid;
        this.ename=ename;
        this.deptno=deptno; 
    }

    setData(eid:number,ename:string,deptno:number): void
    {
        this.eid=eid;
        this.ename=ename;
        this.deptno=deptno; 
    }
        
        

    display(): void
    {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptno);
    }
}

//var emp=new Employee(); // object creation
   // emp.eid=101;
   // emp.ename="john";
   // emp.deptno=10;
   //emp.setData(101,"john",10);
   var emp=new Employee(101,"john",10);
    emp.display();

