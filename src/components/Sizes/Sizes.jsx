import styles from "./Sizes.module.scss";

const Sizes = () => {
  return (
    <>
      <h2 className={styles.heading}>Wielkość porcji</h2>
      {/* <h3 className={styles.heading}>wg Marty Mężyńskiej</h3> */}
      <h3 className={styles.heading}>Jednopiętrowe angliki</h3>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>Średnica tortu [cm]</th>
              <th>Ilość porcji</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>14</td>
              <td className={styles.tableCell}>10</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>16</td>
              <td className={styles.tableCell}>10-12</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>18</td>
              <td className={styles.tableCell}>16-18</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>21</td>
              <td className={styles.tableCell}>20-24</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>24</td>
              <td className={styles.tableCell}>30-40</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>26</td>
              <td className={styles.tableCell}>50</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>28</td>
              <td className={styles.tableCell}>60</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>30</td>
              <td className={styles.tableCell}>70-80</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className={styles.heading}>Dwupiętrowe</h3>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr>
              <th>Średnica tortu [cm]</th>
              <th>Ilość porcji</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>12/18</td>
              <td className={styles.tableCell}>20</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>12/20</td>
              <td className={styles.tableCell}>25</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>14/20-21</td>
              <td className={styles.tableCell}>30</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>14-15/21</td>
              <td className={styles.tableCell}>35</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>16/22</td>
              <td className={styles.tableCell}>40</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>16/22-23</td>
              <td className={styles.tableCell}>45</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>16/24</td>
              <td className={styles.tableCell}>50-55</td>
            </tr>
            <tr className={styles.tableHetableRowader}>
              <td className={styles.tableCell}>18/27</td>
              <td className={styles.tableCell}>65-70</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Sizes;
