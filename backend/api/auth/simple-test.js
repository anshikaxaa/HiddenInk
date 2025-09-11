export default async function handler(req, res) {
  try {
    return res.status(200).json({
      success: true,
      message: 'Simple test endpoint working',
      timestamp: new Date().toISOString(),
      method: req.method,
      url: req.url
    });
  } catch (error) {
    console.error('Simple test error:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}
