import styles from './Contact.module.scss';
import { RotatingLines } from "react-loader-spinner";

import { useEmployees } from '../../providers/ContextProvider';
import { usePostMessage } from '../../hooks/useContactMessage';

const ContactForm = () => {

    const { postMessage,
        loading,
        name,
        email,
        message,
        setName,
        setEmail,
        setMessage,
        hasCommented,
        setHasCommented,
        setEmployeeId } = usePostMessage();


    const employees = useEmployees();

    console.log(employees);




    return (
        <div className={styles.contactForm}>


            {hasCommented ? (
                <div className={styles.success}>
                    <p>Din besked er sendt. Tak for din henvendelse.</p>
                    <button className={styles.newButton} onClick={() => setHasCommented(false)}>Send en ny besked</button>
                </div>
            ) : (
                <>
                    <h3>Udfyld og send formularen og vi vil hurtigst muligt besvare dine spørgsmål</h3>

                    <form className={styles.contactForm} onSubmit={postMessage}>
                        <input
                            type="text"
                            placeholder='Indtast dit navn'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder='Indtast din email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <select name="" id="" placeholder="Vælg medearbejder" onChange={(e) => setEmployeeId(e.target.value)}>
                            <option value="" disabled selected hidden>Vælg medarbejder</option>
                            {employees.map((employee) => (
                                <option
                                    key={employee.id}
                                    value={employee.id}>{employee.firstname} {employee.lastname}

                                </option>
                            ))}
                        </select>
                        <textarea
                            placeholder='Skriv en besked'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required

                        />
                        <div className={styles.buttonContainer}>
                            <button className={styles.button} type="submit" disabled={loading}>
                                {loading ? <RotatingLines height={10} width={10} /> : 'Send'}
                            </button>
                        </div>

                    </form>
                </>
            )}

        </div>
    )

}

export default ContactForm;