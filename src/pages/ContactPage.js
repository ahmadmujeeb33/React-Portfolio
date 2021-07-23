import '../styles/Contact.css';

function displayResults(e){
    e.preventDefault();
    alert("all completed")
}


function ContactPage(){
    return (
        <div>
            <div className="ContactContainer">
                                
                <div className = "form">
                    <div className = "formInfo">
                        <h1>Contact Page</h1>
                        <form >
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Name</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" ></textarea>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" class="form-text text-muted"></small>
                            </div>
        
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button onClick= {displayResults} >Submit</button>

                        </form>
                       
                    </div>
                </div>
                   
                    
                

            </div>
            
        </div>
    )   
}


export default ContactPage;
