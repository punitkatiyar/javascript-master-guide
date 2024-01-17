# javascript Loops

> while : 

> do while

> for

> for in

> for of

```
<script>
        const persons = [
            { name: 'John', age: 30, job: 'developer' },
            { name: 'Jane', age: 25, job: 'designer' },
            { name: 'Bob', age: 35, job: 'manager' }
        ];

        for (let person in persons) {
            // console.log(person.name, person.age, person.job);
            console.log(persons[person].name);
        }

    </script>
```
