function Contact( ){
    return (
        <>
        <h1 className="tc">Contact Me</h1>
        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-column w-30 justify-center">
            <input type="hidden" name="access_key" value="6e51de15-e3c0-459f-bcb4-cd620283d394"/>

            <input name="name" type="text" placeholder="Full Name"/>
            <input name="email" type="text" placeholder="Email"/>
            <textarea name="message" placeholder="Message"cols="30" rows="10"></textarea>
            <input type="hidden" name="redirect" value=""/>
            
            <button>Send</button>
        </form>
        </>
    )
}

export default Contact