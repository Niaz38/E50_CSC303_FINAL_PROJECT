import styles from '../../styles/outline.module.css'
export default function Objectives({ objectives }) {
    // console.log(objectives)
    return (
        <div>
            <h3>Grade Conversion Scheme</h3>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <th>Letter Grade</th>
                        <th>Grade Point</th>
                        <th>Percentage</th>
                    </tr>
                    <tr>
                        <td>A+</td>
                        <td>4.00</td>
                        <td>80-100</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>3.75</td>
                        <td>75-79</td>
                    </tr>
                    <tr>
                        <td>A-</td>
                        <td>3.50</td>
                        <td>70-74</td>
                    </tr>
                    <tr>
                        <td>B+</td>
                        <td>3.25</td>
                        <td>65-69</td>
                    </tr>
                    <tr>
                        <td>B</td>
                        <td>3.00</td>
                        <td>60-64</td>
                    </tr>
                    <tr>
                        <td>B-</td>
                        <td>2.75</td>
                        <td>55-59</td>
                    </tr>
                    <tr>
                        <td>C+</td>
                        <td>2.50</td>
                        <td>50-54</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        <td>2.25</td>
                        <td>45-49</td>
                    </tr>
                    <tr>
                        <td>C-</td>
                        <td>2.00</td>
                        <td>40-44</td>
                    </tr>
                    <tr>
                        <td>D</td>
                        <td>1.00</td>
                        <td>33-39</td>
                    </tr>
                    <tr>
                        <td>F</td>
                        <td>0.00</td>
                        <td>0-32</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}