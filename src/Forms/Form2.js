import React, { useState } from 'react'
import '../Forms/form2.css'
function Form2() {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);




    const handleSumbit = (e) => {
        e.preventDefault();
        if (firstName && email) {
            // const person = {firstName,email}
            // console.log(person)
            // console.log("Successfully Submit");
            const person = { id: new Date().getTime().toString(), firstName, email };
            setPeople((people) => {
                return [...people, person];
            });
            console.log(person)

            setFirstName('')
            setEmail('')

        }
        else {
            console.warn('empty value');
        }
    }
    return (
        <>
            <article>
                <form className='form' onSubmit={handleSumbit}>
                    <div className='form-control'>
                        <label htmlFor='firstName'>Name :</label>
                        <input type='text'
                            id='firstname'
                            name='firstname'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='firstName'>Password:</label>
                        <input type='text'
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type='submit' onClick={handleSumbit}>Add Person</button>
                    </form>
                {
                    people.map((person, index) => {
                        const { id, firstName, email } = person
                        return <div className='item' key={{ id }}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>

                        </div>
                    })
                }
            </article>
            {/* <h1>
                {firstName}
            </h1>
            <h1>{email}</h1> */}


        </>
    )
}
export default Form2;
