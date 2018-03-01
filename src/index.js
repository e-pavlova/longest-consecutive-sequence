module.exports = function longestConsecutiveLength(array)
{
    let consecLength = 0;
    let objArrValues = {};

    if (array.length === 0)
    {
        return 0;
    }
    else
    {
        for (let i = 0; i < array.length; i ++)
        {
            objArrValues[array[i]] = i;
        }

        for (let i = 0; i < array.length; i ++)
        {
            if (objArrValues[array[i] - 1] === undefined)
            {
                let chain = 1;
                let curr = array[i];

                while (objArrValues[curr + 1] !== undefined)
                {
                    chain += 1;
                    curr += 1;
                }

                if (consecLength < chain)
                {
                    consecLength = chain;
                }
            }
        }
    }
    return consecLength;
}