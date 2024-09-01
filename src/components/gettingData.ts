interface GettingDataProps {
   setter: any;
   url: string;
}

export const gettingData = async function ({ setter, url }: GettingDataProps): Promise<void> {
   try {
      const response = await fetch(url);

      if (!response.ok) {
         throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      setter(json);
   } catch (error) {
      console.log(error);
   }
};
