import React, { useState } from "react";

const Poster = () => {
    const [imgSrc, setImgSrc] = useState(
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/07003EE660ABB5B858A4F0F766C79EE7BE1ADE41E2C8FD4E8998DF9E04505A77/scale?width=1440&aspectRatio=3.91&format=jpeg"
    );

    return (
        <>
            <div className="poster">
                <img src={imgSrc} alt="" />
            </div>

            <div className="dots">
                <div
                    className="dot"
                    onClick={() =>
                        setImgSrc(
                            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/07003EE660ABB5B858A4F0F766C79EE7BE1ADE41E2C8FD4E8998DF9E04505A77/scale?width=1440&aspectRatio=3.91&format=jpeg"
                        )
                    }
                ></div>
                <div
                    className="dot"
                    onClick={() => {
                        setImgSrc(
                            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/68CA3C99BB5EF67A9BBBBA9580A0F03811BA82BF9C5689FE8CE544C1F67B2F04/badging?width=1440&aspectRatio=3.91&format=jpeg&label=scrim391"
                        );
                    }}
                ></div>
                <div
                    className="dot"
                    onClick={() => {
                        setImgSrc(
                            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EE1A5A21FD503240A3D781CB05A17B528318E8429D879BCC42BFEBD644EF9C54/badging?width=1440&aspectRatio=3.91&format=jpeg&label=scrim391"
                        );
                    }}
                ></div>
            </div>
        </>
    );
};

export default Poster;
