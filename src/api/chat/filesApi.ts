export const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Kleitech');
    formData.append('cloud_name', 'dmmjv26he');

    const res = await fetch(`https://api.cloudinary.com/v1_1/dmmjv26he/upload`,  {
        method: 'POST',
        body: formData,
    });


    if (!res.ok) {
        const errorData = await res.json();
        console.error('فشل في رفع الملف:', errorData);
        throw new Error('حدث خطأ أثناء رفع الصوت إلى Cloudinary');
    }

    const data = await res.json();
    return data.secure_url;
};