


export const getSubjects = async() => {

    const response = await fetch(`${process.env.DJANGO_URL}subjects`);

    let subjects = await response.json();
    return subjects
    
}