import { useState, useEffect } from "react";
import useMedia from './index';

export default {
    title: 'Hooks/useMedia',
}

// Usage
export const Usage = () => {
    const columnCount = useMedia(
        // Media queries
        ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
        // Column counts (relates to above media queries by array index)
        [5, 4, 3],
        // Default column count
        2
    );
    // Create array of column heights (start at 0)
    let columnHeights = new Array(columnCount).fill(0);
    // Create array of arrays that will hold each column's items
    let columns = new Array(columnCount).fill().map(() => []);
    new Array().fill(3).forEach((item) => {
        // Get index of shortest column
        const shortColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
        // Add item
        columns[shortColumnIndex].push(item);
        // Update height
        columnHeights[shortColumnIndex] += item.height;
    });
    // Render columns and items
    return (
        <div className="App">
            <div className="columns is-mobile">
                {columns.map((column) => (
                    <div className="column">
                        {column.map((item) => (
                            <div
                                className="image-container"
                                style={{
                                    // Size image container to aspect ratio of image
                                    paddingTop: (item.height / item.width) * 100 + "%",
                                }}
                            >
                                <img src={item.image} alt="" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
Usage.storyName = 'useMedia'
