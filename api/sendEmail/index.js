import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    companyName,
    websiteUrl,
    contactName,
    email,
    phoneNumber,
    appType,
    platforms,
    mainGoal,
    brandingAssets
  } = req.body;

  const templateParams = {
    company_name: companyName,
    website_url: websiteUrl,
    from_name: contactName,
    from_email: email,
    phone_number: phoneNumber,
    app_type: appType.join(', '),
    platforms: platforms.join(', '),
    main_goal: mainGoal,
    branding_assets: brandingAssets.join(', '),
  };

  try {
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: 'service_is0x41b',
      template_id: 'template_521xrgx',
      user_id: 'D7WxUsMlMNubYJQk1',
      template_params: templateParams
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ message: 'Failed to send email', error: err.response?.data || err.message });
  }
}
