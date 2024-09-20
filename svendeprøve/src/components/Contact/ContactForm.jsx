import styles from './Contact.module.scss';
import { RotatingLines } from "react-loader-spinner";

import { useEmployees } from '../../providers/ContextProvider';
import { usePostMessage } from '../../hooks/useContactMessage.jsx';

const ContactForm = () => {

    const { postMessage,
        loading,
        error,
        name,
        email,
        message,
        setName,
        setEmail,
        setMessage,
        hasCommented,
        setHasCommented,
        setEmployeeId,
        emailErrorMessage,
        nameError,
        emailError,
        messageError,
        employeeError,
        shake
    } = usePostMessage();


    const employees = useEmployees();





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

                    <form noValidate className={styles.contactForm} onSubmit={postMessage}>
                        <div>

                            <input
                                type="text"
                                placeholder='Indtast dit navn'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`${nameError ? styles.inputError : ''} ${shake ? styles.shake : ''}`}

                            />
                            {nameError && <p className={styles.error}>{nameError}</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder='Indtast din email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`${emailError ? styles.inputError : ''} ${shake ? styles.shake : ''}`}

                            />
                            {emailErrorMessage && <p className={styles.error}>{emailErrorMessage}</p>}
                        </div>
                        <div>
                            <select className={`${employeeError ? styles.inputError : ''} ${shake ? styles.shake : ''}`} name="" id="" placeholder="Vælg medearbejder" onChange={(e) => setEmployeeId(e.target.value)}>
                                <option value="" disabled selected hidden>Vælg medarbejder</option>
                                {employees.map((employee) => (
                                    <option
                                        key={employee.id}
                                        value={employee.id}>{employee.firstname} {employee.lastname}

                                    </option>
                                ))}
                            </select>

                        </div>
                        <div>
                            <textarea
                                placeholder='Skriv en besked'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className={`${messageError ? styles.inputError : ''} ${shake ? styles.shake : ''}`}


                            />
                        </div>
                        <div>
                            {error && <p className={styles.error}>{error}</p>}
                        </div>
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