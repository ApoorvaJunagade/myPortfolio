

function Skills() {
    return (
        <>
            <div id="skills" style={styles.section}>
                <h2>Skills</h2>
                <ul style={styles.ul}>
                    <li><h3>ReactJS</h3></li>
                    <li><h3>NodeJS</h3></li>
                    <li><h3>MongoDB Database</h3></li>
                    <li><h3>Javascript</h3></li>
                </ul>
            </div>
        </>
    );
}
const styles = {
    section: {
        fontFamily: 'Poppins, sans-serif',
        paddingLeft: '40px',

    },

    ul: {
        display: 'flex',
        justifyContent: 'space-around',
        gap: '20px',
        flexWrap: 'wrap'
    }
}

export default Skills;