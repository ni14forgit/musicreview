import { background_purple, purple, white } from '../../constants';
import Text from '../Useful/Text';
import background_image from '../../mainscreen.jpeg';
// import testing from "../../testing.mp4";
import { black } from 'color-name';
import InvertedTextButton from '../Useful/InvertedTextButton';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router';
import { count } from '../../api/accounts/count';
import { send_email } from '../../api/users/email';

const ClearButton = ({ text, fontsize, onClick }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            style={{
                backgroundColor: hovered ? 'white' : 'transparent',
                border: '2px solid white',
                paddingTop: 6,
                paddingBottom: 6,
                paddingRight: 15,
                paddingLeft: 15,
                color: hovered ? purple : 'white',
                fontSize: fontsize,
                width: 'fit-content',
                borderRadius: '5px',
                fontWeight: 'bold',
            }}
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {text}
        </button>
    );
};

const MainScreen = () => {
    const fontsize = 50;

    const history = useHistory();
    const [numReviews, setNumReviews] = useState(0);
    const [numSubmissions, setNumSubmissions] = useState(0);
    const [numUsers, setNumUsers] = useState(0);

    useEffect(async () => {
        const res = await count();
        setNumReviews(res.numReviews.rows[0].count);
        setNumSubmissions(res.numSubmissions.rows[0].count);
        setNumUsers(res.numUsers.rows[0].count);
        // console.log(res);
    }, []);
    return (
        <div>
            <div
                style={{
                    background: `url(${background_image})`,
                    width: '100vw',
                    height: '100vh',
                    backgroundSize: 'cover',
                    boxShadow: `inset 0 0 0 2000px ${background_purple}`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <div style={{ marginLeft: '20%' }}>
                    <Text text={'Become a better musician!'} color={white} fontsize={70} bold={'bold'} />
                </div>
                <div style={{ marginLeft: '20%', width: '50%', marginTop: '5vh' }}>
                    <Text
                        text={
                            'submit the song you want to release on streaming platforms, and our system will select artists in our community to review your music.'
                        }
                        color={'black'}
                        fontsize={40}
                        bold={'bold'}
                    />
                </div>
                <div style={{ marginLeft: '20%', marginTop: '5vh' }}>
                    <ClearButton
                        text={'Join Now!'}
                        fontsize={30}
                        onClick={() => history.push('/authenticate')}
                        // onClick={() => {
                        //   send_email("iyengar.nish@gmail.com", "hi", "lolol");
                        // }}
                    />
                </div>
            </div>

            {/* SECTION TWO */}
            <div
                style={{
                    height: '90vh',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text text={'submit your music'} color={purple} fontsize={40} bold={'bold'} />
                {/* <video height="320" width="240" autoplay="true">
          <source src={testing} type="video/mp4"></source>
        </video> */}
                <div style={{ marginTop: 30 }}>
                    <ReactPlayer
                        style={{ borderRadius: 20 }}
                        url={'testing.mp4'}
                        playing={true}
                        muted={true}
                        loop={true}
                    />
                </div>
            </div>

            {/* SECTION THREE */}
            <div
                style={{
                    height: '110vh',
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'rgba(165, 74, 197, 0.7)',
                }}
            >
                <Text text={'learn from others'} color={white} fontsize={40} bold={'bold'} />
                {/* <video height="320" width="240" autoplay="true">
          <source src={testing} type="video/mp4"></source>
        </video> */}
                <div style={{ marginTop: 30 }}>
                    <ReactPlayer
                        style={{ borderRadius: 10 }}
                        url={'look.mp4'}
                        playing={true}
                        muted={true}
                        loop={true}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'horizontal',
                        justifyContent: 'center',
                        marginTop: 120,
                        marginBottom: 40,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            marginLeft: 30,
                            marginRight: 30,
                        }}
                    >
                        <Text text='# of artists' color={white} fontsize={30} bold='bold' />
                        <Text text={numUsers} color={white} fontsize={30} bold='bold' />
                    </div>
                    <div
                        style={{
                            marginTop: -20,
                            width: 5,
                            height: 90,
                            borderRadius: 5,
                            backgroundColor: white,
                        }}
                    ></div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            marginLeft: 30,
                            marginRight: 30,
                        }}
                    >
                        <Text text='# of submissions' color={white} fontsize={30} bold='bold' />
                        <Text text={numSubmissions} color={white} fontsize={30} bold='bold' />
                    </div>

                    <div
                        style={{
                            marginTop: -20,
                            width: 5,
                            height: 90,
                            borderRadius: 5,
                            backgroundColor: white,
                        }}
                    ></div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            marginLeft: 30,
                            marginRight: 30,
                        }}
                    >
                        <Text text='# of reviews' color={white} fontsize={30} bold='bold' />
                        <Text text={numReviews} color={white} fontsize={30} bold='bold' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainScreen;
