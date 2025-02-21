const userIdUpload = async (req, res) => {
  try {
    const { data } = req.body;
    console.log("data", data);

    if (!data || !Array.isArray(data)) {
      return res
        .status(400)
        .json({ error: 'Invalid input. "data" must be an array.' });
    }

    const numbers = [];
    const alphabets = [];

    data.forEach((item) => {
      if (typeof item === "string") {
        // Check if the entire string is a number
        if (/^\d+$/.test(item)) {
          numbers.push(item); // Push the entire number as a string
        } else {
          // If not a number, treat it as a string of characters
          const characters = item.split("");
          characters.forEach((char) => {
            if (/^[A-Za-z]$/.test(char)) {
              alphabets.push(char.toUpperCase()); // Convert to uppercase for case insensitivity
            }
          });
        }
      } else if (typeof item === "number") {
        numbers.push(item.toString()); // Push the number as a string
      }
    });

    const uniqueAlphabets = [...new Set(alphabets)];
    let highest_alphabet = [];
    if (uniqueAlphabets.length > 0) {
      highest_alphabet = [uniqueAlphabets.reduce((a, b) => (a > b ? a : b))];
    }

    const response = {
      is_success: true,
      user_id: "ABHAYBANSAL_22BCS15306",
      email: "22BCS15306@cuchd.in",
      roll_number: "22BCS15306",
      numbers,
      alphabets: uniqueAlphabets,
      highest_alphabet,
    };

    res.json({ data: response, success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getResponse = async (req, res) => {
  return res.json({ operation_code: 1, status: 200 });
};

export { userIdUpload, getResponse };
