export function createURL(baseURL: string, params: Record<string, any>): string {
    const url = new URL(baseURL);

    // Iterate over each entry in the parameters
    for (const [key, value] of Object.entries(params)) {
        // Only add the parameter to the URL if it has a value
        if (value !== undefined && value !== null && value !== '') {
            url.searchParams.append(key, value);
        }
    }

    // Return the string representation of the URL
    return url.toString();
}

export function createSlug(input: string): string {
    const turkish = ['ş', 'Ş', 'ı', 'İ', 'ğ', 'Ğ', 'ü', 'Ü', 'ö', 'Ö', 'ç', 'Ç'];
    const english = ['s', 'S', 'i', 'I', 'g', 'G', 'u', 'U', 'o', 'O', 'c', 'C'];

    let slug = input;

    // Replace Turkish characters with English counterparts
    for (let index = 0; index < turkish.length; index++) {
        slug = slug.replace(new RegExp(turkish[index], 'g'), english[index]);
    }

    // Convert to lowercase, trim whitespace, replace spaces with hyphens, and remove non-alphanumeric characters
    slug = slug.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    return slug;
}