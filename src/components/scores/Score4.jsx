import React, {useState, useEffect} from 'react';
import supabase from "../../services/supabase.js";


function Score4() {
    const [fetchError, setFetchError] = useState(null);
    const [scores, setScores] = useState(null);

    useEffect(() => {
        const fetchScores = async () => {
            let { data: bestScore4, error } = await supabase
                .from('bestScore4')
                .select('*')

            if (error) {
                setFetchError("Could not fetch best scores");
                setScores(null);
                console.log(error);
            }

            if (bestScore4) {
                setScores(bestScore4);
                setFetchError(null);
            }
        }
        fetchScores();
    }, []);

    return (
        <div className="biggerField">
            <h2>Global scores - 4 puzzles</h2>
            {fetchError && <p>{fetchError}</p>}
            {scores &&
                <ul>
                    {scores.sort((a,b) => a.time - b.time)
                        .slice(0, 15)
                        .map(({id, name, time}, index) => <li key={id}>{`${index + 1}.`} {name} {time} s</li>)
                    }
                </ul>
            }
        </div>
    );
}

export default Score4;