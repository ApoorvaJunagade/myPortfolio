

function Interests() {
    return (
        <>
            <div id="Interests" style={styles.section}>
                <h2>Interests</h2>
                <ul style={styles.ul}>
                    <li><h3>Learning New Web Technologies</h3></li>
                    <li><h3>UI/UX Design</h3></li>
                    <li><h3>Drawing/Painting</h3></li>
                    <li><h3>Cooking</h3></li>
                </ul>
            </div>
        </>
    );
}
const styles = {
    section: {
        paddingLeft: '40px',
        fontFamily: 'Poppins, sans-serif',
    },

    ul: {
        display: 'flex',
        justifyContent: 'space-around',
        gap: '20px',
        flexWrap: 'wrap'

    }
}

export default Interests;