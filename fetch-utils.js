/* eslint-disable no-console */
const SUPABASE_URL = 'https://cnfgxcsilmdanstiixji.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwNzY3MywiZXhwIjoxOTU1MDgzNjczfQ.T4j8T8PmMQvcyTO4egZ0EUIxHwmUeklr4DArTmn6mc0';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchPlanets() {
    const response = await client
        .from('planets')
        .select();
    return checkError(response);
}

export async function fetchPlanetCard(id) {
    const response = await client
        .from('planets')
        .select()
        .match({ id: id })
        .single();

    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}