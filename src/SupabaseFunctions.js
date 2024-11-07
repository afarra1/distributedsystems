import { supabase } from './SupabaseClient';

// Function to create a new user in the Users table
export const createUser = async (userData) => {
  const { user, error: signUpError } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
  });

  if (signUpError) return { error: signUpError.message };

  // Insert user details into the Users table (for normal users or doctors)
  const { error: insertError } = await supabase
    .from('Users') // Adjust the table name if necessary
    .insert([{ 
      user_id: user.id, 
      first_name: userData.first_name, 
      last_name: userData.last_name,
      dob: userData.dob,
      occupation: userData.occupation,
      is_doctor: userData.is_doctor
    }]);

  if (insertError) return { error: insertError.message };
  
  return { success: 'Registration successful!' };
};

// Example function to fetch all Users from a table
export const getAllUsers = async () => {
  try {
    const { data, error } = await supabase
      .from('Users')
      .select('*');

    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error fetching Users:', error.message);
    return null;
  }
};

  