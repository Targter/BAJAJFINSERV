const userIdUpload = async (req, res) => {
  try {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
      return res
        .status(400)
        .json({ error: 'Invalid input. "data" must be an array.' });
    }

    // Separate numbers and alphabets
    const numbers = [];
    const alphabets = [];

    data.forEach((item) => {
      if (/^\d+$/.test(item)) {
        // If the item is a number, add to numbers array
        numbers.push(item);
      } else if (/^[A-Za-z]$/.test(item)) {
        // If the item is a single alphabet, add to alphabets array
        alphabets.push(item.toUpperCase()); // Convert to uppercase for case insensitivity
      }
    });

    // Find the highest alphabet
    let highest_alphabet = [];
    if (alphabets.length > 0) {
      highest_alphabet = [alphabets.reduce((a, b) => (a > b ? a : b))];
    }

    // Prepare the response
    const response = {
      is_success: true,
      user_id: "ABHAYBANSAL_22BCS15306",
      email: "22BCS15306@cuchd.in",
      roll_number: "22BCS15306",
      numbers,
      alphabets,
      highest_alphabet,
    };

    // Send the response
    res.json({ data: response, success: true });
  } catch (error) {
    res.json({ message: "Internal server error" }, { status: 500 });
  }
};

const getResponse = async (req, res) => {
  return res.json({ operation_code: 1, status: 200 });
};

//
export { userIdUpload, getResponse };
