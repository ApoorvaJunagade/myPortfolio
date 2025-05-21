function Education() {
    return (
        <section className="Container" style={Styles.Education}>
            <div style={Styles.title} >

                <h2 >Education</h2>
            </div>
            
            <div style={Styles.container}  >
<div>
                <h2>BE in information technology</h2>
                <h3>Savitribai Phule Pune University, 2016 - 2019</h3>
                <h3>score: 63.2 % </h3>
                <span><i className="bi bi-geo-alt-fill"></i> Nashik
                </span>
                <hr />
            </div>
            
            <div>
                <h2>Polytechnic in computer technology</h2>
                <h3>K.K.Wagh Polytechnic, 2013 - 2016</h3>
                <h3>score: 79.12 % </h3>
                <span><i className="bi bi-geo-alt-fill"></i> Nashik
                </span>
<hr />
            </div>
</div>
        </section>

    );
}

const Styles = {
    Education:{
        fontFamily: 'Poppins, sans-serif',
    },
    title: {
        display: 'flex',
        	justifyContent: 'flex-start',
            padding:'40px'

    },
    container:{
     display:'flex',
     justifyContent: 'space-around',
     gap: '20px',
  flexWrap: 'wrap'
    }
}

export default Education;