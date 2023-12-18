import React from 'react';

import { Box, Container, Typography, useTheme } from '@mui/material';
import getbg from '../../images/getbg.png';
import Header from '../../Components/Header';

const terms = [
    {
        heading: '1. Collection of Personal Information',
        body: 'a. Information You Provide:<br>We collect the following categories of personal information:<br><br><span>  <b>Identification Information : </b> </span>Your email address and password.Cryptocurrency Information: The public wallet address for each cryptocurrency holding you connect to the Service and the associated transaction history, including dates and amounts. Depending on your Crypee account settings, we may retrieve this history from the blockchain, exchanges (with your permission), or materials you upload through the Service.<br><span><b>Financial Information:</b> </span>Our payment processor(s) collect the financial information necessary to process your payments, such as your payment card number and authentication details. Note that we only store tokenized versions of this information, not the actual payment card data.<br><span><b>Financial Information:</b> </span>Our payment processor(s) collect the financial information necessary to process your payments, such as your payment card number and authentication details. Note that we only store tokenized versions of this information, not the actual payment card data.<br><span><b>Social Media Information:</b> </span>When you interact with us on social media platforms, we may receive personal information based on your profile settings and the information you provide.<br>',
    },

    {
        heading: 'b. Internet Activity Information:',
        body: 'When you use the Service, the following information may be automatically logged in our systems:<br><br><span> <b> Device Information:  </b> </span> Details like device manufacturer, model, operating system, IP address, unique identifiers, and the browser you use to access the Service. The specific information collected may vary depending on your device type and settings.<br><span> <b>Usage Information: </b> Data related to your Service usage, such as the content you view or interact with, features you use, actions you take, and the timing, frequency, and duration of your activities. We use Google Analytics and Mixpanel for collecting and analyzing usage data. Details about how Google and Mixpanel use this information are available.</span><br><span> <b> Location Information:  </b> </span>A rough estimate of your location may be derived from your IP address when you visit the Site.  Email Open/Click Information: We may employ email pixels to collect your email and IP address, along with the date and time you open an email or click on any links within it.',
    },
    {
        heading: 'c. Technologies for Data Collection:',
        body: 'To collect Internet Activity Information, we may use the following technologies:<br><br><span> <b> Cookies: </b> </span>Text files stored on your device to uniquely identify your browser or store information/settings for efficient navigation, preference retention, functionality, understanding user activity, pattern analysis, and facilitating online advertising.<br><span> <b> Local Storage Technologies:</b> </span> Technologies like HTML5 that offer cookie-like functionality but can store larger data volumes, including on your device outside your browser, in connection with specific applications.<br><span> <b>Web Beacons:</b> </span>Also known as pixel tags or clear GIFs, these are used to confirm access or opening of webpages or emails, or the viewing or clicking of specific content.',
    },
];

const Privacypolicy = () => {
    const theme = useTheme();
    return (
        <Box sx={{ background: `url(${getbg})`, height: 'auto', backgroundSize: 'cover' }}>
            <Header />

            <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 10 }, py: 3 }}>
                <Typography
                    py={2.5}
                    sx={{
                        fontSize: { md: '20px', sm: '15px', xs: '14px' },
                        fontWeight: 800,
                        fontFamily: 'Gmarket',
                        color: `${theme.palette.text.darkblue}`,
                        textTransform: 'uppercase',
                    }}
                >
                    Privacy Policy
                    <br></br>
                    <br></br>
                    Your Privacy Matters to Us
                </Typography>
                <Box width={{ xs: '100%', sm: '100%', md: '900px', lg: '900px' }}>
                    <Typography
                        sx={{
                            fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                            fontWeight: 400,
                            fontFamily: 'Gmarket',
                            color: `${theme.palette.text.lightbrown}`,
                            lineHeight: '22.5px',
                        }}
                    >
                        Crypee is committed to protecting your privacy. This Privacy Policy is
                        designed to clarify the personal information we collect, how we use and
                        share it, and the choices you have regarding our information practices. By
                        using the Crypee website (the &ldquo;Site&rdquo;) and mobile application
                        (the &ldquo;App&rdquo;) to track your cryptocurrency portfolio&rsquo;s
                        performance and calculate related capital gains and losses (the
                        &ldquo;Service&rdquo;), you consent to the practices outlined in this
                        Privacy Policy. Please read this Privacy Policy carefully and reach out to
                        us if you have any questions. If you do not agree to this Privacy Policy,
                        please do not access the Site or use the Service. This Privacy Policy is an
                        integral part of our Terms of Service.
                    </Typography>
                </Box>

                {terms.map((item) => (
                    <div key={item}>
                        <Typography
                            py={2.5}
                            sx={{
                                fontSize: { md: '20px', sm: '15px', xs: '14px' },
                                fontWeight: 800,
                                fontFamily: 'Gmarket',
                                color: `${theme.palette.text.darkblue}`,
                                textTransform: 'uppercase',
                            }}
                        >
                            {item.heading}
                        </Typography>

                        <Box width={{ xs: '100%', sm: '100%', md: '900px', lg: '900px' }}>
                            <Typography
                                sx={{
                                    fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                                    fontWeight: 400,
                                    fontFamily: 'Gmarket',
                                    color: `${theme.palette.text.lightbrown}`,
                                    lineHeight: '22.5px',
                                }}
                                dangerouslySetInnerHTML={{ __html: item.body }}
                            ></Typography>
                        </Box>
                    </div>
                ))}
            </Container>
        </Box>
    );
};

export default Privacypolicy;
