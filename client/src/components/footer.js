import React from 'react';
import '../componentsCss/footer.css';

function Footer() {
    return (
        <div className="footer1">
            <ul>
                <li><a href="https://www.facebook.com/WilstermannClubDeportivo/"><i class="fa fa-facebook-square"></i></a></li>
                <li><a href="https://twitter.com/Wilstermann?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fa fa-twitter-square"></i></a></li>
                <li><a href="https://www.instagram.com/clubjorgewilstermannoficial/?hl=es-la"><i class="fa fa-instagram"></i></a></li>
                <li><a href="https://github.com/drexxcbba"><i class="fa fa-github-square"></i></a></li>
            </ul>
            <div class="footer2">
            &copy; 2020 Designed by Juan Villarroel | Cochabamba, Bolivia. 
        </div>
        </div>
    );
}

export default Footer;