import React from 'react';

import { Box, Container, Typography, useTheme } from '@mui/material';
import getbg from '../../images/getbg.png';
import Header from '../../Components/Header';

const terms = [
    {
        heading: '1. Acceptance of Terms',
        body: 'Welcome to Crypee! These Terms of Service ("TOS") constitute a legally binding agreement between you and ("we," "us," or "our") governing your use of the Crypee website ("Website") and its services. By accessing or using our Website, you agree to comply with these TOS. If you do not agree to these TOS, please do not use the Website.',
    },
    {
        heading: '2. Changes to TOS',
        body: 'We reserve the right to modify these TOS at any time without notice. You are responsible for reviewing these TOS periodically. Your continued use of the Website following changes constitutes acceptance of the updated TOS.',
    },
    {
        heading: '3. User Eligibility',
        body: 'You must be at least 18 years old or the legal age of majority in your jurisdiction to use the Website. By using the Website, you represent and warrant that you meet this age requirement.',
    },
    {
        heading: '4. Privacy Policy',
        body: 'Your use of the Website is also governed by our Privacy Policy, which can be found on our Website. Please review the Privacy Policy to understand how we collect, use, and protect your personal information.',
    },
    {
        heading: '5. User Accounts',
        body: 'a. To access certain features of the Website, you may need to create a user account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.<br>b. You agree to provide accurate, current, and complete information during the registration process and to update this information as necessary to maintain its accuracy. <br>c. We reserve the right to suspend or terminate your account if we believe you have violated these TOS or for any other reason.',
    },
    {
        heading: '6. Prohibited Activities',
        body: 'When using the Website, you agree not to engage in any of the following prohibited activities:<br><br> • Violating any applicable laws or regulations. <br>• Using the Website for any fraudulent, abusive, or illegal purposes. <br>• Uploading, posting, or transmitting any content that is harmful, offensive, or violates the rights of others  <br>• Attempting to gain unauthorized access to the Website or its systems. <br>• Using automated scripts, bots, or any other means to access or collect data from the Website.',
    },
    {
        heading: '7. Intellectual Property',
        body: 'a. All content and materials on the Website, including but not limited to text, graphics, logos, images, software, and trademarks, are the property of [Your Company Name] or its licensors and are protected by copyright, trademark, and other intellectual property laws.<br><br>b. You may not reproduce, distribute, modify, or create derivative works based on any part of the Website without our prior written consent.',
    },
    {
        heading: '8. Disclaimer of Warranties',
        body: 'a. The Website and its content are provided "as is" and "as available" without any warranties of any kind, either express or implied.<br><br>b. We make no representations or warranties regarding the accuracy, completeness, or reliability of the content on the Website.',
    },
    {
        heading: '9. Limitation of Liability',
        body: 'a. To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use or inability to use the Website.',
    },
    {
        heading: '10. Indemnification',
        body: 'You agree to indemnify, defend, and hold harmless [Your Company Name], its officers, directors, employees, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses arising from your use of the Website, your violation of these TOS, or your violation of any rights of a third party.',
    },
    {
        heading: '11. Termination',
        body: 'We reserve the right to terminate or suspend your access to the Website, with or without cause, at any time and without notice.',
    },
    {
        heading: '12. Governing Law and Jurisdiction ',
        body: 'These TOS are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. Any dispute arising from or relating to these TOS or your use of the Website shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].',
    },
    {
        heading: '13. Contact Us',
        body: 'If you have any questions or concerns regarding these TOS, please contact us at [Contact Information].',
    },
];

const Termsofservices = () => {
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
                    Crypee - Terms of Service
                </Typography>
                <Typography
                    sx={{
                        fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                        fontWeight: 400,
                        fontFamily: 'Gmarket',
                        color: `${theme.palette.text.lightbrown}`,
                        lineHeight: '22.5px',
                    }}
                >
                    Effective Date: [Date]
                </Typography>
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

export default Termsofservices;
