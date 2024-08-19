import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import SplashVideo from '../assets/splashvideo.mp4'; // Impor video

export const SplashScreen = () => {
  const history = useHistory();
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsVideoFinished(true);
  //     history.push('/home'); // Redirect ke HomePage setelah 13 detik
  //   }, 13000); // 13 detik

  //   return () => clearTimeout(timer); // Bersihkan timeout jika komponen unmount
  // }, [history]);

  return (
    <div>
      <h1 className='text-black'>sdhskdahdsak</h1>
      {/* <video 
        width="100%" 
        height="100%" 
        autoPlay 
        muted 
        onEnded={() => {
          if (!isVideoFinished) {
            history.push('/home');
          }
        }}>
        <source src={SplashVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
};
